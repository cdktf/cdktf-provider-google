# `iapTunnelInstanceIamBinding` Submodule <a name="`iapTunnelInstanceIamBinding` Submodule" id="@cdktf/provider-google.iapTunnelInstanceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapTunnelInstanceIamBinding <a name="IapTunnelInstanceIamBinding" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding google_iap_tunnel_instance_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

new iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding(scope: Construct, id: string, config: IapTunnelInstanceIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig">IapTunnelInstanceIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig">IapTunnelInstanceIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition"></a>

```typescript
public putCondition(value: IapTunnelInstanceIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IapTunnelInstanceIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IapTunnelInstanceIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapTunnelInstanceIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapTunnelInstanceIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IapTunnelInstanceIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference">IapTunnelInstanceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.condition"></a>

```typescript
public readonly condition: IapTunnelInstanceIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference">IapTunnelInstanceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: IapTunnelInstanceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapTunnelInstanceIamBindingCondition <a name="IapTunnelInstanceIamBindingCondition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.Initializer"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

const iapTunnelInstanceIamBindingCondition: iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#expression IapTunnelInstanceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#title IapTunnelInstanceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#description IapTunnelInstanceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#expression IapTunnelInstanceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#title IapTunnelInstanceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#description IapTunnelInstanceIamBinding#description}.

---

### IapTunnelInstanceIamBindingConfig <a name="IapTunnelInstanceIamBindingConfig" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.Initializer"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

const iapTunnelInstanceIamBindingConfig: iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.instance">instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#instance IapTunnelInstanceIamBinding#instance}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#members IapTunnelInstanceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#role IapTunnelInstanceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#id IapTunnelInstanceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#project IapTunnelInstanceIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#zone IapTunnelInstanceIamBinding#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#instance IapTunnelInstanceIamBinding#instance}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#members IapTunnelInstanceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#role IapTunnelInstanceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: IapTunnelInstanceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#condition IapTunnelInstanceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#id IapTunnelInstanceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#project IapTunnelInstanceIamBinding#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/iap_tunnel_instance_iam_binding#zone IapTunnelInstanceIamBinding#zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapTunnelInstanceIamBindingConditionOutputReference <a name="IapTunnelInstanceIamBindingConditionOutputReference" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { iapTunnelInstanceIamBinding } from '@cdktf/provider-google'

new iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IapTunnelInstanceIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

---



