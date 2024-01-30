# `vmwareengineExternalAddress` Submodule <a name="`vmwareengineExternalAddress` Submodule" id="@cdktf/provider-google.vmwareengineExternalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineExternalAddress <a name="VmwareengineExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address google_vmwareengine_external_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

new vmwareengineExternalAddress.VmwareengineExternalAddress(scope: Construct, id: string, config: VmwareengineExternalAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig">VmwareengineExternalAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig">VmwareengineExternalAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts"></a>

```typescript
public putTimeouts(value: VmwareengineExternalAddressTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineExternalAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VmwareengineExternalAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwareengineExternalAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwareengineExternalAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineExternalAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference">VmwareengineExternalAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIpInput">internalIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineExternalAddressTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference">VmwareengineExternalAddressTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VmwareengineExternalAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineExternalAddressConfig <a name="VmwareengineExternalAddressConfig" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.Initializer"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

const vmwareengineExternalAddressConfig: vmwareengineExternalAddress.VmwareengineExternalAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.internalIp">internalIp</a></code> | <code>string</code> | The internal IP address of a workload VM. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.name">name</a></code> | <code>string</code> | The ID of the external IP Address. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new external address in. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.description">description</a></code> | <code>string</code> | User-provided description for this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#id VmwareengineExternalAddress#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

The internal IP address of a workload VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#internal_ip VmwareengineExternalAddress#internal_ip}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the external IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#name VmwareengineExternalAddress#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud to create a new external address in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#parent VmwareengineExternalAddress#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#description VmwareengineExternalAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#id VmwareengineExternalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineExternalAddressTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#timeouts VmwareengineExternalAddress#timeouts}

---

### VmwareengineExternalAddressTimeouts <a name="VmwareengineExternalAddressTimeouts" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.Initializer"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

const vmwareengineExternalAddressTimeouts: vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#create VmwareengineExternalAddress#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#delete VmwareengineExternalAddress#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#update VmwareengineExternalAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#create VmwareengineExternalAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#delete VmwareengineExternalAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/vmwareengine_external_address#update VmwareengineExternalAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineExternalAddressTimeoutsOutputReference <a name="VmwareengineExternalAddressTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer"></a>

```typescript
import { vmwareengineExternalAddress } from '@cdktf/provider-google'

new vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineExternalAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

---



