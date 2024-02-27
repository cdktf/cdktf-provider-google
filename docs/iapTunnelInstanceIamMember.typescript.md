# `iapTunnelInstanceIamMember` Submodule <a name="`iapTunnelInstanceIamMember` Submodule" id="@cdktf/provider-google.iapTunnelInstanceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapTunnelInstanceIamMember <a name="IapTunnelInstanceIamMember" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member google_iap_tunnel_instance_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

new iapTunnelInstanceIamMember.IapTunnelInstanceIamMember(scope: Construct, id: string, config: IapTunnelInstanceIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig">IapTunnelInstanceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig">IapTunnelInstanceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.putCondition"></a>

```typescript
public putCondition(value: IapTunnelInstanceIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IapTunnelInstanceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isConstruct"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformElement"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformResource"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IapTunnelInstanceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapTunnelInstanceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapTunnelInstanceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IapTunnelInstanceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference">IapTunnelInstanceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.condition"></a>

```typescript
public readonly condition: IapTunnelInstanceIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference">IapTunnelInstanceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: IapTunnelInstanceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapTunnelInstanceIamMemberCondition <a name="IapTunnelInstanceIamMemberCondition" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.Initializer"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

const iapTunnelInstanceIamMemberCondition: iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#expression IapTunnelInstanceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#title IapTunnelInstanceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#description IapTunnelInstanceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#expression IapTunnelInstanceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#title IapTunnelInstanceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#description IapTunnelInstanceIamMember#description}.

---

### IapTunnelInstanceIamMemberConfig <a name="IapTunnelInstanceIamMemberConfig" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.Initializer"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

const iapTunnelInstanceIamMemberConfig: iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.instance">instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#instance IapTunnelInstanceIamMember#instance}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#member IapTunnelInstanceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#role IapTunnelInstanceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#id IapTunnelInstanceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#project IapTunnelInstanceIamMember#project}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#zone IapTunnelInstanceIamMember#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#instance IapTunnelInstanceIamMember#instance}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#member IapTunnelInstanceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#role IapTunnelInstanceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: IapTunnelInstanceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#condition IapTunnelInstanceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#id IapTunnelInstanceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#project IapTunnelInstanceIamMember#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/resources/iap_tunnel_instance_iam_member#zone IapTunnelInstanceIamMember#zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapTunnelInstanceIamMemberConditionOutputReference <a name="IapTunnelInstanceIamMemberConditionOutputReference" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { iapTunnelInstanceIamMember } from '@cdktf/provider-google'

new iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IapTunnelInstanceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamMember.IapTunnelInstanceIamMemberCondition">IapTunnelInstanceIamMemberCondition</a>

---



