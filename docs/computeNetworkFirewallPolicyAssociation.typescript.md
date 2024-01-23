# `computeNetworkFirewallPolicyAssociation` Submodule <a name="`computeNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicyAssociation <a name="ComputeNetworkFirewallPolicyAssociation" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association google_compute_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

new computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation(scope: Construct, id: string, config: ComputeNetworkFirewallPolicyAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig">ComputeNetworkFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig">ComputeNetworkFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeNetworkFirewallPolicyAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isConstruct"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNetworkFirewallPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNetworkFirewallPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNetworkFirewallPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.attachmentTargetInput">attachmentTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.attachmentTarget">attachmentTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `attachmentTargetInput`<sup>Optional</sup> <a name="attachmentTargetInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```typescript
public readonly attachmentTargetInput: string;
```

- *Type:* string

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```typescript
public readonly firewallPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```typescript
public readonly attachmentTarget: string;
```

- *Type:* string

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyAssociationConfig <a name="ComputeNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

const computeNetworkFirewallPolicyAssociationConfig: computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">attachmentTarget</a></code> | <code>string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | The firewall policy ID of the association. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.name">name</a></code> | <code>string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#id ComputeNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```typescript
public readonly attachmentTarget: string;
```

- *Type:* string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#attachment_target ComputeNetworkFirewallPolicyAssociation#attachment_target}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

The firewall policy ID of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#firewall_policy ComputeNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#name ComputeNetworkFirewallPolicyAssociation#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#id ComputeNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#project ComputeNetworkFirewallPolicyAssociation#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#timeouts ComputeNetworkFirewallPolicyAssociation#timeouts}

---

### ComputeNetworkFirewallPolicyAssociationTimeouts <a name="ComputeNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

const computeNetworkFirewallPolicyAssociationTimeouts: computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#create ComputeNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#delete ComputeNetworkFirewallPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#create ComputeNetworkFirewallPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/compute_network_firewall_policy_association#delete ComputeNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

new computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyAssociation.ComputeNetworkFirewallPolicyAssociationTimeouts">ComputeNetworkFirewallPolicyAssociationTimeouts</a>

---



