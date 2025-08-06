# `kmsEkmConnection` Submodule <a name="`kmsEkmConnection` Submodule" id="@cdktf/provider-google.kmsEkmConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsEkmConnection <a name="KmsEkmConnection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection google_kms_ekm_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

new kmsEkmConnection.KmsEkmConnection(scope: Construct, id: string, config: KmsEkmConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig">KmsEkmConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig">KmsEkmConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers">putServiceResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetCryptoSpacePath">resetCryptoSpacePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetKeyManagementMode">resetKeyManagementMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceResolvers` <a name="putServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers"></a>

```typescript
public putServiceResolvers(value: IResolvable | KmsEkmConnectionServiceResolvers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putServiceResolvers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsEkmConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

---

##### `resetCryptoSpacePath` <a name="resetCryptoSpacePath" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetCryptoSpacePath"></a>

```typescript
public resetCryptoSpacePath(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyManagementMode` <a name="resetKeyManagementMode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetKeyManagementMode"></a>

```typescript
public resetKeyManagementMode(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

kmsEkmConnection.KmsEkmConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

kmsEkmConnection.KmsEkmConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

kmsEkmConnection.KmsEkmConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

kmsEkmConnection.KmsEkmConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsEkmConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsEkmConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsEkmConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolvers">serviceResolvers</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList">KmsEkmConnectionServiceResolversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference">KmsEkmConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePathInput">cryptoSpacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementModeInput">keyManagementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolversInput">serviceResolversInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePath">cryptoSpacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementMode">keyManagementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `serviceResolvers`<sup>Required</sup> <a name="serviceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolvers"></a>

```typescript
public readonly serviceResolvers: KmsEkmConnectionServiceResolversList;
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList">KmsEkmConnectionServiceResolversList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeouts"></a>

```typescript
public readonly timeouts: KmsEkmConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference">KmsEkmConnectionTimeoutsOutputReference</a>

---

##### `cryptoSpacePathInput`<sup>Optional</sup> <a name="cryptoSpacePathInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePathInput"></a>

```typescript
public readonly cryptoSpacePathInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyManagementModeInput`<sup>Optional</sup> <a name="keyManagementModeInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementModeInput"></a>

```typescript
public readonly keyManagementModeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceResolversInput`<sup>Optional</sup> <a name="serviceResolversInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.serviceResolversInput"></a>

```typescript
public readonly serviceResolversInput: IResolvable | KmsEkmConnectionServiceResolvers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KmsEkmConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

---

##### `cryptoSpacePath`<sup>Required</sup> <a name="cryptoSpacePath" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.cryptoSpacePath"></a>

```typescript
public readonly cryptoSpacePath: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyManagementMode`<sup>Required</sup> <a name="keyManagementMode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.keyManagementMode"></a>

```typescript
public readonly keyManagementMode: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsEkmConnectionConfig <a name="KmsEkmConnectionConfig" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

const kmsEkmConnectionConfig: kmsEkmConnection.KmsEkmConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.location">location</a></code> | <code>string</code> | The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.name">name</a></code> | <code>string</code> | The resource name for the EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.serviceResolvers">serviceResolvers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]</code> | service_resolvers block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.cryptoSpacePath">cryptoSpacePath</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.etag">etag</a></code> | <code>string</code> | Optional. Etag of the currently stored EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.keyManagementMode">keyManagementMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the EkmConnection. A full list of valid locations can be found by running 'gcloud kms locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#location KmsEkmConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name for the EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#name KmsEkmConnection#name}

---

##### `serviceResolvers`<sup>Required</sup> <a name="serviceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.serviceResolvers"></a>

```typescript
public readonly serviceResolvers: IResolvable | KmsEkmConnectionServiceResolvers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]

service_resolvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#service_resolvers KmsEkmConnection#service_resolvers}

---

##### `cryptoSpacePath`<sup>Optional</sup> <a name="cryptoSpacePath" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.cryptoSpacePath"></a>

```typescript
public readonly cryptoSpacePath: string;
```

- *Type:* string

Optional.

Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#crypto_space_path KmsEkmConnection#crypto_space_path}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Optional. Etag of the currently stored EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#etag KmsEkmConnection#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyManagementMode`<sup>Optional</sup> <a name="keyManagementMode" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.keyManagementMode"></a>

```typescript
public readonly keyManagementMode: string;
```

- *Type:* string

Optional.

Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#key_management_mode KmsEkmConnection#key_management_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsEkmConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#timeouts KmsEkmConnection#timeouts}

---

### KmsEkmConnectionServiceResolvers <a name="KmsEkmConnectionServiceResolvers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

const kmsEkmConnectionServiceResolvers: kmsEkmConnection.KmsEkmConnectionServiceResolvers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.hostname">hostname</a></code> | <code>string</code> | Required. The hostname of the EKM replica used at TLS and HTTP layers. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serverCertificates">serverCertificates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]</code> | server_certificates block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serviceDirectoryService">serviceDirectoryService</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.endpointFilter">endpointFilter</a></code> | <code>string</code> | Optional. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Required. The hostname of the EKM replica used at TLS and HTTP layers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#hostname KmsEkmConnection#hostname}

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: IResolvable | KmsEkmConnectionServiceResolversServerCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]

server_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#server_certificates KmsEkmConnection#server_certificates}

---

##### `serviceDirectoryService`<sup>Required</sup> <a name="serviceDirectoryService" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.serviceDirectoryService"></a>

```typescript
public readonly serviceDirectoryService: string;
```

- *Type:* string

Required.

The resource name of the Service Directory service pointing to an EKM replica, in the format projects/* /locations/* /namespaces/* /services/*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#service_directory_service KmsEkmConnection#service_directory_service}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `endpointFilter`<sup>Optional</sup> <a name="endpointFilter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers.property.endpointFilter"></a>

```typescript
public readonly endpointFilter: string;
```

- *Type:* string

Optional.

The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#endpoint_filter KmsEkmConnection#endpoint_filter}

---

### KmsEkmConnectionServiceResolversServerCertificates <a name="KmsEkmConnectionServiceResolversServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

const kmsEkmConnectionServiceResolversServerCertificates: kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.rawDer">rawDer</a></code> | <code>string</code> | Required. The raw certificate bytes in DER format. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code>string[]</code> | Output only. The subject Alternative DNS names. Only present if parsed is true. |

---

##### `rawDer`<sup>Required</sup> <a name="rawDer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.rawDer"></a>

```typescript
public readonly rawDer: string;
```

- *Type:* string

Required. The raw certificate bytes in DER format. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#raw_der KmsEkmConnection#raw_der}

---

##### `subjectAlternativeDnsNames`<sup>Optional</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates.property.subjectAlternativeDnsNames"></a>

```typescript
public readonly subjectAlternativeDnsNames: string[];
```

- *Type:* string[]

Output only. The subject Alternative DNS names. Only present if parsed is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#subject_alternative_dns_names KmsEkmConnection#subject_alternative_dns_names}

---

### KmsEkmConnectionTimeouts <a name="KmsEkmConnectionTimeouts" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

const kmsEkmConnectionTimeouts: kmsEkmConnection.KmsEkmConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsEkmConnectionServiceResolversList <a name="KmsEkmConnectionServiceResolversList" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

new kmsEkmConnection.KmsEkmConnectionServiceResolversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get"></a>

```typescript
public get(index: number): KmsEkmConnectionServiceResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsEkmConnectionServiceResolvers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>[]

---


### KmsEkmConnectionServiceResolversOutputReference <a name="KmsEkmConnectionServiceResolversOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

new kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates">putServerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter">resetEndpointFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerCertificates` <a name="putServerCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates"></a>

```typescript
public putServerCertificates(value: IResolvable | KmsEkmConnectionServiceResolversServerCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.putServerCertificates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]

---

##### `resetEndpointFilter` <a name="resetEndpointFilter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.resetEndpointFilter"></a>

```typescript
public resetEndpointFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificates">serverCertificates</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList">KmsEkmConnectionServiceResolversServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput">endpointFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput">serverCertificatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput">serviceDirectoryServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilter">endpointFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService">serviceDirectoryService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: KmsEkmConnectionServiceResolversServerCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList">KmsEkmConnectionServiceResolversServerCertificatesList</a>

---

##### `endpointFilterInput`<sup>Optional</sup> <a name="endpointFilterInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilterInput"></a>

```typescript
public readonly endpointFilterInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `serverCertificatesInput`<sup>Optional</sup> <a name="serverCertificatesInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serverCertificatesInput"></a>

```typescript
public readonly serverCertificatesInput: IResolvable | KmsEkmConnectionServiceResolversServerCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]

---

##### `serviceDirectoryServiceInput`<sup>Optional</sup> <a name="serviceDirectoryServiceInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryServiceInput"></a>

```typescript
public readonly serviceDirectoryServiceInput: string;
```

- *Type:* string

---

##### `endpointFilter`<sup>Required</sup> <a name="endpointFilter" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.endpointFilter"></a>

```typescript
public readonly endpointFilter: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `serviceDirectoryService`<sup>Required</sup> <a name="serviceDirectoryService" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.serviceDirectoryService"></a>

```typescript
public readonly serviceDirectoryService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsEkmConnectionServiceResolvers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolvers">KmsEkmConnectionServiceResolvers</a>

---


### KmsEkmConnectionServiceResolversServerCertificatesList <a name="KmsEkmConnectionServiceResolversServerCertificatesList" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

new kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get"></a>

```typescript
public get(index: number): KmsEkmConnectionServiceResolversServerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsEkmConnectionServiceResolversServerCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>[]

---


### KmsEkmConnectionServiceResolversServerCertificatesOutputReference <a name="KmsEkmConnectionServiceResolversServerCertificatesOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

new kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames">resetSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubjectAlternativeDnsNames` <a name="resetSubjectAlternativeDnsNames" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.resetSubjectAlternativeDnsNames"></a>

```typescript
public resetSubjectAlternativeDnsNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime">notAfterTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime">notBeforeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed">parsed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint">sha256Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput">rawDerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput">subjectAlternativeDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer">rawDer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames">subjectAlternativeDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `notAfterTime`<sup>Required</sup> <a name="notAfterTime" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notAfterTime"></a>

```typescript
public readonly notAfterTime: string;
```

- *Type:* string

---

##### `notBeforeTime`<sup>Required</sup> <a name="notBeforeTime" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.notBeforeTime"></a>

```typescript
public readonly notBeforeTime: string;
```

- *Type:* string

---

##### `parsed`<sup>Required</sup> <a name="parsed" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.parsed"></a>

```typescript
public readonly parsed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `sha256Fingerprint`<sup>Required</sup> <a name="sha256Fingerprint" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.sha256Fingerprint"></a>

```typescript
public readonly sha256Fingerprint: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `rawDerInput`<sup>Optional</sup> <a name="rawDerInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDerInput"></a>

```typescript
public readonly rawDerInput: string;
```

- *Type:* string

---

##### `subjectAlternativeDnsNamesInput`<sup>Optional</sup> <a name="subjectAlternativeDnsNamesInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNamesInput"></a>

```typescript
public readonly subjectAlternativeDnsNamesInput: string[];
```

- *Type:* string[]

---

##### `rawDer`<sup>Required</sup> <a name="rawDer" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.rawDer"></a>

```typescript
public readonly rawDer: string;
```

- *Type:* string

---

##### `subjectAlternativeDnsNames`<sup>Required</sup> <a name="subjectAlternativeDnsNames" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.subjectAlternativeDnsNames"></a>

```typescript
public readonly subjectAlternativeDnsNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsEkmConnectionServiceResolversServerCertificates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionServiceResolversServerCertificates">KmsEkmConnectionServiceResolversServerCertificates</a>

---


### KmsEkmConnectionTimeoutsOutputReference <a name="KmsEkmConnectionTimeoutsOutputReference" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsEkmConnection } from '@cdktf/provider-google'

new kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsEkmConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsEkmConnection.KmsEkmConnectionTimeouts">KmsEkmConnectionTimeouts</a>

---



