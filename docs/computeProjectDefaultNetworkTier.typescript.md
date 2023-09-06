# `google_compute_project_default_network_tier`

Refer to the Terraform Registory for docs: [`google_compute_project_default_network_tier`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier).

# `computeProjectDefaultNetworkTier` Submodule <a name="`computeProjectDefaultNetworkTier` Submodule" id="@cdktf/provider-google.computeProjectDefaultNetworkTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeProjectDefaultNetworkTier <a name="ComputeProjectDefaultNetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier google_compute_project_default_network_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

new computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier(scope: Construct, id: string, config: ComputeProjectDefaultNetworkTierConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig">ComputeProjectDefaultNetworkTierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig">ComputeProjectDefaultNetworkTierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeProjectDefaultNetworkTierTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeProjectDefaultNetworkTierTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeProjectDefaultNetworkTierTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeProjectDefaultNetworkTierConfig <a name="ComputeProjectDefaultNetworkTierConfig" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.Initializer"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

const computeProjectDefaultNetworkTierConfig: computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#network_tier ComputeProjectDefaultNetworkTier#network_tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#project ComputeProjectDefaultNetworkTier#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeProjectDefaultNetworkTierTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#timeouts ComputeProjectDefaultNetworkTier#timeouts}

---

### ComputeProjectDefaultNetworkTierTimeouts <a name="ComputeProjectDefaultNetworkTierTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.Initializer"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

const computeProjectDefaultNetworkTierTimeouts: computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeProjectDefaultNetworkTierTimeoutsOutputReference <a name="ComputeProjectDefaultNetworkTierTimeoutsOutputReference" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeProjectDefaultNetworkTier } from '@cdktf/provider-google'

new computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeProjectDefaultNetworkTierTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

---



